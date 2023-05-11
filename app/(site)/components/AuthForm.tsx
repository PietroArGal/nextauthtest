'use client';

// Importaciones dependencias Next / React
import axios from "axios";
import { useCallback, useEffect, useState } from 'react';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from "next/navigation";
import { signIn, useSession } from 'next-auth/react';

// Importaciones locales
import AuthSocialButton from './AuthSocialButton';
import Button from "@/app/components/Button";
import { Input } from "@/app/components/inputs/Input";

// Importaciones de terceros
import { toast } from "react-hot-toast";


type Variant = 'LOGIN' | 'REGISTER';

export const AuthForm = () => {

    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const redirectAuthenticatedUser = useCallback(() => {
        if (session?.status === 'authenticated') {
            router.push('/users')
            toast.success('¡Bienvenido!')
        }
    }, [session?.status, router]);

    const handleToggleVariant = useCallback(() => {
        setVariant((prevState) => prevState === 'LOGIN' ? 'REGISTER' : 'LOGIN');
    }, []);

    const handleLogin = useCallback((data: FieldValues) => {
        setIsLoading(true);

        signIn('credentials', {
            ...data,
            redirect: false
        })
            .then((callback) => {
                if (callback?.error) {
                    toast.error('Credenciales Inválidas');
                }

                if (callback?.ok && !callback?.error) {
                    router.push('/users')
                }
            })
            .finally(() => setIsLoading(false))
    }, [router]);

    const handleRegistration = useCallback((data: FieldValues) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() => signIn('credentials', data))
            .then(() => {
                toast.success('¡Registro exitoso!');
            })
            .catch(() => toast.error('Ocurrió un error, inténtelo de nuevo'))
            .finally(() => setIsLoading(false))
    }, []);

    const handleSocialAction = useCallback((action: string) => {
        setIsLoading(true);

        signIn(action, { redirect: false })
            .then((callback) => {
                if (callback?.error) {
                    toast.error('Ingreso Fallido');
                }
            })
            .finally(() => setIsLoading(false));
    }, []);

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    useEffect(() => {
        redirectAuthenticatedUser();
    }, [redirectAuthenticatedUser]);

    const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
        if (variant === 'LOGIN') {
            handleLogin(data);
        }

        if (variant === 'REGISTER') {
            handleRegistration(data);
        }
    }

    return (
        <div className="mt-7 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
                    {variant === 'REGISTER' && (
                        <Input
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required
                            id="name"
                            label="Nombre"
                        />
                    )}
                    <Input
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                        id="email"
                        label="Email"
                        type="email"
                    />
                    <Input
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                        id="password"
                        label="Contraseña"
                        type="password"
                    />
                    <div>
                        <Button disabled={isLoading} fullWidth type="submit">
                            {variant === 'LOGIN' ? 'Ingresa' : 'Registrate'}
                        </Button>
                    </div>
                </form>

                {variant === 'LOGIN' && (

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500">
                                    Continua con
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-2">

                            <AuthSocialButton
                                icon={BsFacebook}
                                onClick={() => handleSocialAction('facebook')}
                            />
                            <AuthSocialButton
                                icon={BsGoogle}
                                onClick={() => handleSocialAction('google')}
                            />

                        </div>

                    </div>

                )}

                <div
                    className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500"
                >
                    <div>
                        {variant === 'LOGIN' ? 'Nuevo en Cachuelos?' : 'Ya tienes una cuenta?'}
                    </div>
                    <div
                        onClick={handleToggleVariant}
                        className="underline cursor-pointer"
                    >
                        {variant === 'LOGIN' ? 'Crea una cuenta' : 'Ingresa ahora'}
                    </div>
                </div>
            </div>
        </div>
    )
}