"use client";

import Click from "@/app/Context/Modal/inner/click";
import Show from "@/app/Context/Modal/inner/Show";
import ModalBlog from "@/app/Context/Modal/Modal";
function page() {
  return (
    <div>
      Hello wolrd
      <ModalBlog Id={"1"}>
        <Show></Show>
      </ModalBlog>
      <Click Id={"1"}></Click>
    </div>
  );
}

export default page;
