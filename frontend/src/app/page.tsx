"use client";

import Link from "next/link";
import Modal from 'react-modal';
import React, { useState } from "react";
import { ICustomStyles } from "@/interfaces/CommonInterfaces";
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from "next/navigation";

const customStyles: ICustomStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#1E293B',
    border: 'none',
    borderRadius: '8px',
    padding: '20px',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    color: '#9CA3AF',
  },
};

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [colabId, setColabId] = useState('');

  const router = useRouter();

  const openModal = () => {
    setColabId('');
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleEnter = () => {
    if (colabId.trim() !== '') {
      closeModal();
      router.push(`/codeEditor?uniqueColabId=${encodeURIComponent(colabId.trim())}`);
    }
  }

  const uniqueColabId: string = uuidv4();

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-500 to-purple-500 items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-6">Welcome to CodeFlex Editor</h1>
        <div className="space-x-4">
          <Link href={`/codeEditor?uniqueColabId=${uniqueColabId}`}>
            <button className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full text-lg font-semibold transition duration-300">
              Go to Code Editor
            </button>
          </Link>
          <button
            onClick={openModal}
            className="bg-yellow-500 hover:bg-yellow-600 px-8 py-3 rounded-full text-lg font-semibold transition duration-300"
          >
            Input Code
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Input Code Modal"
      >
        <div className="text-white">
          <button
            onClick={closeModal}
            style={customStyles.closeButton}
          >
            X
          </button>
          <h2 className="text-2xl font-bold mb-4">Enter Colab Code</h2>
          <input
            type="text"
            placeholder="Colab Code"
            className="bg-gray-700 p-2 rounded-md mb-2 text-white"
            onChange={ (e) => setColabId(e.target.value)}
          />
          <button
            onClick={ handleEnter }
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-full text-lg font-semibold transition duration-300 ml-4"
          >
            Enter
          </button>
        </div>
      </Modal>
    </div>
  );
};