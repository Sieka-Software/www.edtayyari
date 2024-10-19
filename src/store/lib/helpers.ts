import config from "../../config"

export const getHeaders = (): Record<string, string> => {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      AppId: config.APP_ID!,
      AppKey: config.APP_KEY!,
    }
  }