import { toast, Flip } from "react-toastify";

type UseToastOptions = { id?: string };

export const useToast = () => {
    function error(message: string, options?: UseToastOptions) {
        toast(message, {
            toastId: options?.id,
            type: 'error',
            position: 'top-right',
            draggable: false,
            hideProgressBar: true,
            transition: Flip,
            isLoading: true,
        });
    }

    function loading(message: string, options?: UseToastOptions) {
        toast(message, {
            toastId: options?.id,
            type: 'default',
            position: 'top-right',
            draggable: false,
            hideProgressBar: true,
            transition: Flip,
            isLoading: true,
        });
    };

    function update(id: string, options?: UseToastOptions & { message?: string, type?: 'error' | 'success' | 'info', isLoading?: boolean, time?: number }) {
        toast.update(id, {
            render: options?.message,
            type: options?.type,
            isLoading: options?.isLoading,
            autoClose: options?.time ?? 3000,
        });
    }

    return { error, loading, update };
}