export type FaqStatus = "active" | "inactive";

export interface FaqItem {
  _id: string;
  question: string;
  answer: string;
  status: FaqStatus;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface FaqMeta {
  page: number;
  limit: number;
  total: number;
}

export interface FaqListResponse {
  statusCode: number;
  success: boolean;
  message: string;
  meta: FaqMeta;
  data: FaqItem[];
}

export interface FaqMutationResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: FaqItem;
}

export interface FaqFormValues {
  question: string;
  answer: string;
  status: FaqStatus;
}
