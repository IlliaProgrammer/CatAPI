import React, {useState, useRef} from 'react';
import styles from "./Modal.module.css"
import cross from "../../assets/svg/default/cross.svg"
import { galleryApi } from '../../services/GalleryService';

interface ModalProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ active, setActive }) => {
    const [files, setFiles] = useState<FileList | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const  [uploadImagePost, {}] =  galleryApi.useUploadGallaryMutation()

  
    const handleDragOver = (event: any) => {
        event.preventDefault();
    }

    const handleDrop = (event: any) => {
        event.preventDefault();
        setFiles(event.dataTransfer.files)
    }

    const handleSelectClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const uploadImage = () => {
        if (files && files.length > 0) {
            const file = files[0];
            return URL.createObjectURL(file);
        }
    }

    const handleCreate = async () => {
        if (files && files.length > 0) {
            const formData = new FormData();
            console.log(files[0])
            formData.append("file", files[0]); // Append the first file from the FileList
            await uploadImagePost({file: files[0]}); // Pass the FormData to the mutation
            setFiles(null);
            console.log("succeeded");
        }
    };

    return (
        <div className={active ? `${styles.modal} ${styles.active}` : styles.modal}>
            <div className={styles.modal_content}>
                <div className={styles.close} onClick={() => setActive(false)}>
                    <img src={cross} alt="" />
                </div>
                <div className={styles.modal_text}>
                    <p className={styles.text_title}>Upload a .jpg or .png Cat Image</p>
                    <p className={styles.rules}>Any uploads must comply with the <a href="https://thecatapi.com/privacy" className={styles.link}>upload guidelines</a> or face deletion.</p>
                </div>
                 <div 
                                className={styles.drag_area}
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                                onClick={handleSelectClick}
                            >
                    
                    {!files ? 
                           
                                <>
                                    <span className={styles.select}>
                                    Drag here 
                                    </span>
                                   your file or 
                                   <input type="file" 
                                        onChange={(event)=>setFiles(event.target.files)}
                                        hidden
                                        ref={inputRef}
                                    />
                                    <span className={styles.select} role="button" >
                                        Click here 
                                    </span>
                                    to upload
                                </> : 
                                <>
                                <img src={uploadImage()} alt="" className={styles.uploadImage}/>
                                </>
                                 }
                        </div>  
                   
                 
               {
                !files ? <div className={styles.nofiles}>No file selected</div> : 
                <div className={styles.accept}>
                    <p className={styles.image_title}>Image File Name: {files && files[0].name}</p>
                    <button type='button' className={styles.button} onClick={handleCreate}> Upload photo</button>
                </div>
               }
                 
            </div>
        </div>
    );
};

export default Modal;