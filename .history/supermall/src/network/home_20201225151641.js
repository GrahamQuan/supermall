import { request } from "./request";

export function getHomeMultiData() {
  return new request({
    url: "/home/multidata"
  });
}
