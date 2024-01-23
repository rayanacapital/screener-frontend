'use client';

import { useEffect, useRef } from "react";
import useWebSocket from "react-use-websocket";

type Result = { [key: string]: any };

export const useScreener = (): Result => {
    const data = useRef<Result>({});
  
    const { lastMessage, sendMessage, readyState } = useWebSocket(
      `ws://localhost:8088/ws`,
      {
        shouldReconnect: () => true,
        onOpen: () => console.log("[screener] Connected to data stream"),
        onClose: () => {
            console.log("[screener] Disconnected from data stream");
        },
      },
    );
  
    useEffect(() => {
      if (lastMessage !== null) {
        try {
          const message = JSON.parse(lastMessage.data) as {
            type: string;
            message: any;
          };
  
          switch (message?.type) {
            case "data":
              data.current = message.message.tickers;
              break;
          }
        } catch (e) {
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastMessage]);
  
    return data.current;
  };