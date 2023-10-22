import { useEffect, useState } from 'react';
import Icon, { IconName } from './Icon';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    iconTitle?: IconName;
};

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children,
    ...props
}) => {
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsRendered(true);
        }
    }, [isOpen]);

    const closeModal = () => {
        setIsRendered(false);
        setTimeout(() => {
            onClose();
        }, 300);
    };

    return (
        <>
            {isOpen && (
                <div
                    className={`fixed inset-0 flex items-center justify-center z-50 ${isRendered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                        } transition-opacity duration-300`}
                >
                    <div className="bg-accent p-4 rounded-md shadow-lg">
                        <div className="flex justify-between mb-4">
                            {props.title &&
                                <div className="flex items-center">
                                    {props.iconTitle && <Icon iconName={props.iconTitle} />}
                                    <h2 className="text-xl mx-3 font-bold text-white">{props.title}</h2>
                                </div>}
                            <button
                                className="text-gray-500"
                                onClick={closeModal}
                                aria-label="Fechar"
                            >
                                <Icon iconName="faTimes" />
                            </button>
                        </div>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
