import React, {useState} from 'react';
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from 'reactstrap';

export default function BookCards({thumbnail, title, pageCount, language, authors, publisher, description, previewLink, infoLink}) {
    const [modal, setModal] = useState(false);
    const handleToggle = () =>{
        setModal(!modal);
    }
    return (
        <Card style={{ width: '233px' }} className='m-auto '>
            <CardImg    
            top
           style={{ width: '100%', height: '233px' }}
           src={thumbnail}
           alt={title}/>
           <CardBody>
               <CardTitle className="card-title">{title}</CardTitle>
               <Button className="success" onClick={handleToggle}>More Info</Button>
           </CardBody>
           <Modal isOpen={modal} toggle={handleToggle}>
               <div className='modal-header d-flex justify-content-center'>
                    <h5 className='modal-title text-center' id='exampleModalLabel'>
                        {title}
                    </h5>
                    <Button  aria-label='Close'
                            className='close'
                            type='button'
                            onClick={handleToggle}><span aria-hidden="true"><i className="fas fa-times"></i></span>
                    </Button>
               </div>
               <div className="modal-body">
                    <div className="d-flex justify-content-between ml-3">
                        <img src={thumbnail} alt={title} style={{ height: '233px' }} />
                        <div className="ml-2">
                            <p>Page Count: {pageCount}</p>
                            <p>Language : {language}</p>
                            <p>Authors : {authors}</p>
                            <p>Publisher : {publisher}</p>
                        </div>
                    </div>
                    <div className="mt-3">{description}</div>
               </div>
               <div className="modal-footer">
                    <div  className='left-silde'>
                        <a
                        href={previewLink}
                        className='btn btn-warning'
                        color='default'
                        type='button'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Preview Link
                        </a>
                    </div>
                    <div className='divider'></div>
                    <div className="right-slide">
                        <a
                        href={infoLink}
                        className='btn btn-primary'
                        color='default'
                        type='button'
                        target='_blank'
                        rel='noopener noreferrer'
                        >
                            Info Link
                        </a>
                    </div>
               </div>
           </Modal>
        </Card>
    )
}
