
export interface IParams  {
  category: string; 
  id: string; 
}

export type SubsiteNavbarItemProps = {
  params: IParams, 
  item: ISubsite
}

export interface ISubsite {
  name: string;
  ID: string; 
  comment_count: string; 
  comment_status: string; 
  guid: string; 
  menu_order: string; 
  ping_status: string; 
  pinged: string; 
  post_author: string; 
  post_content: string; 
  post_content_filtered: string;
  post_date: string; 
  post_date_gmt: string; 
  post_excerpt: string; 
  post_mime_type: string; 
  post_modified_gmt: string; 
  post_name: string; 
  post_parent: string; 
  post_password: string; 
  post_status: string; 
  post_title: string; 
  post_type: string; 
  to_ping: string; 
}

export type CategoryItemType = {
  name: string;
  slug: string;
  term_group: string;
  term_id: string;
};

export type SubsiteItemType = {
  comment_count: string;
  comment_status: string;
  guid: string;
  menu_order: string;
  ping_status: string;
  pinged: string;
  post_author: string;
  post_content: string;
  post_content_filtered: string;
  post_date: string;
  post_date_gmt: string;
  post_excerpt: string;
  post_mime_type: string;
  post_modified: string;
  post_modified_gmt: string;
  post_name: string;
  post_parent: string;
  post_password: string;
  post_status: string;
  post_title: string;
  post_type: string;
  to_ping: string;
};

export type ItemType = {
  category: CategoryItemType;
  content: SubsiteItemType[];
};

export type NavbarSubsiteItemType = {
    item: any; 
}