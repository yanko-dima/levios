export interface ISearchForm {
  onSetSubmitSearch: (value: string, category: string) => void;
}

export interface ISearchFormValues {
  search: string;
  category: string;
}

// export interface ISearchInput {
//   name: string;
//   type: string;
//   placeholder?: string;
// }
//
// export interface ISearchSelect {
//   name: string;
//   // children: Element[]
// }
