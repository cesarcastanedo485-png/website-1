export {};

declare global {
  interface Window {
    tixEmbed?: {
      inst: Array<{
        countdown: boolean;
        events: boolean;
        eventId: string;
        filters: string;
      }>;
    };
  }
}
