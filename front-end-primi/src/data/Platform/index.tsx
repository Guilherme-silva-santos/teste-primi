import type { RequestStatus } from "model/request-status";
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Platform } from "../../model/get-all-platforms-response";
import { api } from "../../service/axios";

interface PlatformProviderProps {
  children: ReactNode;
}

interface PlatformContextProps {
  getAllPlatforms: () => Promise<void>;
  getAllPlatformsRequestStatus: RequestStatus;
  allPlatforms: Platform[];
}

const PlatformContext = createContext<PlatformContextProps>(
  {} as PlatformContextProps
);

// eslint-disable-next-line react-refresh/only-export-components
export const usePlatform = () => useContext(PlatformContext);

export const PlatformProvider = ({ children }: PlatformProviderProps) => {
  const [getAllPlatformsRequestStatus, setGetAllPlatformsRequestStatus] =
    useState<RequestStatus>({ status: "idle" });

  const [allPlatforms, setAllPlatforms] = useState<Platform[]>([]);

  const getAllPlatforms = async () => {
    setGetAllPlatformsRequestStatus({ status: "pending" });
    try {
      const response = await api.get<Platform[]>("/platforms");

      setAllPlatforms(response.data);

      setGetAllPlatformsRequestStatus({ status: "succeeded" });
    } catch (error) {
      console.error(error);
      setGetAllPlatformsRequestStatus({ status: "failed" });
    }
  };

  return (
    <PlatformContext.Provider
      value={{
        getAllPlatforms,
        getAllPlatformsRequestStatus,
        allPlatforms,
      }}
    >
      {children}
    </PlatformContext.Provider>
  );
};
