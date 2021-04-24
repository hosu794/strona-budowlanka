export interface INodeMediaItem {
  node: IMediaItem;
}

export type GalleryFolderProps = {
  folderId: string | undefined; 
}

export interface IMediaItemAuthor {
  email?: string;
  nickname?: string;
}

export interface IMediaItemDetails {
  height: number;
  width: number;
}

export interface IMediaItem {
  guid: string; 
  ID: string;
}

export interface IMediaPagedResponseItem {
  comment_count: string;
  comment_status: string;
  guid: string;
  ping_status: string;
  pinged: string | "";
  post_author: string;
  post_content: string;
  post_content_filtered: string;
  post_date: string;
  post_date_gmt: string;
  post_excerpt: string;
  post_mime_type: string;
  post_modified: string | Date;
  post_modified_gmt: string | Date;
  post_name: string;
  post_parent: string;
  post_password: string;
  post_status: string;
  post_title: string;
  post_type: string;
  to_ping: string | "";
}

export interface IMediasPagedResponse {
  content: IMediaPagedResponseItem[];
  nextPage: number;
  pageCount: number;
  prevPage: number;
}
