export type Project = {
  image: string;
  name: string;
  description: string;
  technologies: string[];
  links: {
    live: {
      front?: string;
      back?: string;
    };
    code: {
      front: string;
      back?: string;
    };
  };
};
