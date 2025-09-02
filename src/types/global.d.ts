export {};

declare global {
    type AuthValues = {
        firstname: string;
        lastname: string;
        email: string;
        password: string;
    }

    type LoginValues = {
        email: string;
        password: string;
    }

    type AlertState = {
        loading: boolean;
        alert: string
    }

    type FormErr = {
        firstname?: string;
        lastname?: string;
        email?: string;
        password?: string;
    }

    type FormErrors = Partial<Record<keyof AuthValues, string>>

    interface ImportMetaEnv {
        readonly VITE_SUPABASE_URL: string;
        readonly VITE_SUPABASE_ANON_KEY: string;
    }
      
    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
}