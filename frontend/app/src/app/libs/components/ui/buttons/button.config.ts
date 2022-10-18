
export enum BUTTON_VIEW {
  FULL_WIDTH,
  LISTS_PAGE
};

export interface FullWidthButtonData {
  text: string;
  view: BUTTON_VIEW;
}
export interface ButtonListsPageData {
  text: string;
  icon: string;
  view: BUTTON_VIEW;
};
