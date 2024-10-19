export const utils = {
    getCodeType(codeType: number) {
        if (codeType < 300) {
            return 'success';
        }
        return 'error';
    },
    validateEmail(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email.trim());
    },
    trasformStatus(type: string): string {
        switch (type) {
            case 'success':
                return 'white';
            case 'error':
                return 'danger';
            default:
                return 'info';
        }
    }
};