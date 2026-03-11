import react from "../../public/logos/reactjs.svg";
import nodejs from "../../public/logos/nodejs.svg";
import mongo from "../../public/logos/mongo.svg";
import jest from "../../public/logos/jest.svg";
import storybook from "../../public/logos/storybook.svg";
import swagger from "../../public/logos/swagger.svg";
import gemini from "../../public/logos/google-gemini.svg";
import tailwind from "../../public/logos/tailwindcss.svg";
import githubaction from "../../public/logos/github-actions.svg";
import jwt from "../../public/logos/jwt.svg";
import nestjs from "../../public/logos/nestjs.svg";
import postgresql from "../../public/logos/postgresql.svg";
import prisma from "../../public/logos/prisma.svg";
import supabase from "../../public/logos/supabase.svg";
import openai from "../../public/logos/openai.svg";
import grok from "../../public/logos/grok.svg";
import whatsappwebjs from "../../public/logos/whatsappwebjs.svg";

const projectsData = [
    {
        title: 'EleCommerce',
        category: 'NODEJS / REACTJS',
        text: 'Aplicación de comercio electrónico con carrito de compras, pasarela de pagos, autenticación, IA, y gestión de productos.',
        image: 'https://res.cloudinary.com/dnx4de9yv/image/upload/v1772857220/Portafolio/omipbapliznmfhlt4cfq.jpg',
        link: 'https://ele-commerce.vercel.app',
        link_github: 'https://github.com/Johnmontoya/EleCommerce',
        selling: false,
        selling_note: '',
        tecnologies: [
            { name: 'React', icon: react },
            { name: 'Node.js', icon: nodejs },
            { name: 'MongoDB', icon: mongo },
            { name: 'PostgreSQL', icon: postgresql },
            { name: 'Prisma', icon: prisma },
            { name: 'Tailwind CSS', icon: tailwind },
            { name: 'Jest', icon: jest },
            { name: 'Google Gemini', icon: gemini },
            { name: 'GitHub Actions', icon: githubaction },
            { name: 'JWT', icon: jwt }
        ],
        admin: {
            cuenta: 'Admin',
            contraseña: 'Admin1234'
        },
        user: {
            cuenta: 'User',
            contraseña: 'User1234'
        }
    },
    {
        title: 'Crisol de Ideas',
        category: 'NODEJS / REACTJS',
        text: `Plataforma Fullstack de un Blog con arquitectura DDD y estética Neo-Editorial, optimizada con IA, seguridad JWT, 
        animaciones fluidas, gestión de publicaciones y comentarios.`,
        image: 'https://res.cloudinary.com/dnx4de9yv/image/upload/v1772380450/Portafolio/smimce05sc1sd8brmnnc.jpg',
        link: 'https://blog-app-web-crisol.vercel.app',
        link_github: 'https://github.com/Johnmontoya/BlogAppWebCrisol',
        selling: false,
        selling_note: '',
        tecnologies: [
            { name: 'React', icon: react },
            { name: 'Node.js', icon: nodejs },
            { name: 'MongoDB', icon: mongo },
            { name: 'Tailwind CSS', icon: tailwind },
            { name: 'Storybook', icon: storybook },
            { name: 'Jest', icon: jest },
            { name: 'Swagger', icon: swagger },
            { name: 'Google Gemini', icon: gemini },
            { name: 'GitHub Actions', icon: githubaction },
            { name: 'JWT', icon: jwt }
        ],
        admin: {
            cuenta: 'admin@example.com',
            contraseña: 'Admin1234'
        },
        user: {
            cuenta: 'usuario@gmail.com',
            contraseña: 'User1234'
        }
    },
    {
        title: 'FitnestAI',
        category: 'NESTJS / REACTJS',
        text: 'Aplicación de seguimiento de fitness con seguimiento de ejercicios, nutrición y progreso.',
        image: 'https://res.cloudinary.com/dnx4de9yv/image/upload/v1772501515/Portafolio/dhxokex1bc4j4vmrkbrb.jpg',
        link: 'https://fittrackpro-hazel.vercel.app',
        link_github: 'https://github.com/Johnmontoya/FitnnestAI',
        selling: false,
        selling_note: '',
        tecnologies: [
            { name: 'React', icon: react },
            { name: 'NestJS', icon: nestjs },
            { name: 'PostgreSQL', icon: postgresql },
            { name: 'Prisma', icon: prisma },
            { name: 'MongoDB', icon: mongo },
            { name: 'Tailwind CSS', icon: tailwind },
            { name: 'Storybook', icon: storybook },
            { name: 'Jest', icon: jest },
            { name: 'Swagger', icon: swagger },
            { name: 'Google Gemini', icon: gemini },
            { name: 'GitHub Actions', icon: githubaction },
            { name: 'JWT', icon: jwt }
        ],
        admin: {
            cuenta: 'admin@example.com',
            contraseña: 'Admin1234'
        },
        user: {
            cuenta: 'usuario@gmail.com',
            contraseña: 'User1234'
        }
    }, {
        title: 'OmniBot AI',
        category: 'NODEJS / REACTJS',
        text: 'Aplicación de chatbot con IA para Whatsapp.',
        image: 'https://res.cloudinary.com/dnx4de9yv/image/upload/v1773238333/Portafolio/bn8oou3sjmesugk5rxk8.jpg',
        link: 'https://chatbot-bay-omega-36.vercel.app/login',
        link_github: '',
        selling: true,
        selling_note: 'Actualmente esta siendo probado en un restaurante local. Link github no disponible',
        tecnologies: [
            { name: 'React', icon: react },
            { name: 'Node.js', icon: nodejs },
            { name: 'Supabase', icon: supabase },
            { name: 'PostgreSQL', icon: postgresql },
            { name: 'Tailwind CSS', icon: tailwind },
            { name: 'Jest', icon: jest },
            { name: 'Google Gemini', icon: gemini },
            { name: 'OpenAI', icon: openai },
            { name: 'GroQ', icon: grok },
            { name: 'GitHub Actions', icon: githubaction },
            { name: 'WhatsAppWebJS', icon: whatsappwebjs }
        ],
        admin: {
            cuenta: 'Admin',
            contraseña: 'Admin1234'
        },
        user: {
            cuenta: 'User',
            contraseña: 'User1234'
        }
    }
]

export default projectsData