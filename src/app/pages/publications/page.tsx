"use client";
import React, { useState } from "react";
import styles from "./Publications.module.css";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import { Button, ButtonGroup } from "@nextui-org/button";

const PublicationsPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleCreatePublication = () => {
    setShowForm(true);
  };
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  console.log("isOpen", isOpen);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Iniciar sesión</h1>
        <>
          {/* <Button onPress={onOpen}>Open Modal</Button>{" "} */}
          <button type="submit" className={styles.submitButton}>
            Iniciar sesión
          </button>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Modal Title
                  </ModalHeader>
                  <ModalBody>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor
                      cupidatat consequat elit dolor adipisicing. Mollit dolor
                      eiusmod sunt ex incididunt cillum quis. Velit duis sit
                      officia eiusmod Lorem aliqua enim laboris do dolor
                      eiusmod. Et mollit incididunt nisi consectetur esse
                      laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                      deserunt nostrud ad veniam.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      </div>
    </div>

    // <div className={styles.container}>
    //   {!showForm ? (
    //     <button className={styles.button} onClick={handleCreatePublication}>
    //       Crear nueva publicación
    //     </button>
    //   ) : (
    //     <form className={styles.form}>
    //       <input type="text" placeholder="Título" className={styles.input} />
    //       <textarea placeholder="Descripción" className={styles.input} />
    //       <input
    //         type="number"
    //         placeholder="Meta monetaria"
    //         className={styles.input}
    //       />
    //       <button type="submit" className={styles.button}>
    //         Crear
    //       </button>
    //     </form>
    //   )}
    // </div>
  );
};

export default PublicationsPage;
