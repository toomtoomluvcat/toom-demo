"use client";
import { Modal } from "@mantine/core";
import { Children, cloneElement, isValidElement, ReactNode } from "react";
import { useModal } from "./useModal";

interface ModalBlogProps {
  children: ReactNode;
  Id?: string;
}

function ModalBlog({ children, Id = "1" }: ModalBlogProps) {
  const { isModalOpen, closeModal } = useModal();

  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { Id: Id } as any);
    }
    return child;
  });

  return (
    <Modal opened={isModalOpen(Id)} onClose={() => closeModal(Id)}>
      {childrenWithProps}
    </Modal>
  );
}

export default ModalBlog;
