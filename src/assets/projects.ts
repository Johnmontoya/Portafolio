import react from "/logos/reactjs.svg";
import nodejs from "/logos/nodejs.svg";
import mongo from "/logos/mongo.svg";
import jest from "/logos/jest.svg";
import storybook from "/logos/storybook.svg";
import swagger from "/logos/swagger.svg";
import gemini from "/logos/google-gemini.svg";
import tailwind from "/logos/tailwindcss.svg";
import githubaction from "/logos/github-actions.svg";
import jwt from "/logos/jwt.svg";
import nestjs from "/logos/nestjs.svg";
import postgresql from "/logos/postgresql.svg";
import prisma from "/logos/prisma.svg";
import supabase from "/logos/supabase.svg";
import openai from "/logos/openai.svg";
import grok from "/logos/grok.svg";
import whatsappwebjs from "/logos/whatsappwebjs.svg";
import astro from "/logos/astro.svg";
import nextjs from "/logos/nextjs.svg";
import redis from "/logos/redis.svg";
import bullmq from "/logos/bullmq.svg";
import docker from "/logos/docker.svg";

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
            { name: 'JWT', icon: jwt },
            { name: 'Docker', icon: docker }
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
        title: 'ReportEleCom',
        category: 'NODEJS / REACTJS',
        text: 'Sistema de cola de reportes para EleCommerce con graficas en tiempo real',
        image: 'https://res.cloudinary.com/dnx4de9yv/image/upload/v1774925698/Portafolio/ljp8nccjrjxlox7pibul.jpg',
        link: 'https://report-ele-com.vercel.app',
        link_github: 'https://github.com/Johnmontoya/ReportEleCom',
        selling: false,
        selling_note: '',
        tecnologies: [
            { name: 'React', icon: react },
            { name: 'Node.js', icon: nodejs },
            { name: 'MongoDB', icon: mongo },
            { name: 'Redis', icon: redis },
            { name: 'BullMQ', icon: bullmq },
            { name: 'Tailwind CSS', icon: tailwind },
            { name: 'Docker', icon: docker }
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
            { name: 'JWT', icon: jwt },
            { name: 'Docker', icon: docker }
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
    },
    {
        title: 'Sisha',
        category: 'ASTRO',
        text: 'Landing page de hookahs para celebraciones.',
        image: 'https://res.cloudinary.com/dnx4de9yv/image/upload/v1774825518/Portafolio/pf7x8gpzupjmao2hnjkr.jpg',
        link: 'https://sisha-omega.vercel.app/',
        link_github: '',
        selling: false,
        selling_note: '',
        tecnologies: [
            { name: 'Astro', icon: astro },
        ],
        admin: {
            cuenta: '',
            contraseña: ''
        },
        user: {
            cuenta: '',
            contraseña: ''
        }
    },
    {
        title: 'Flame & Char',
        category: 'NEXTJS / TAILWIND CSS',
        text: 'Landing page de hamburguesas.',
        image: 'https://res.cloudinary.com/dnx4de9yv/image/upload/v1774828548/Portafolio/efbwuu76demeru1zzcja.jpg',
        link: 'https://landingpage-burger.vercel.app/',
        link_github: '',
        selling: false,
        selling_note: '',
        tecnologies: [
            { name: 'Next.js', icon: nextjs },
            { name: 'Tailwind CSS', icon: tailwind },
        ],
        admin: {
            cuenta: '',
            contraseña: ''
        },
        user: {
            cuenta: '',
            contraseña: ''
        }
    }
]

export default projectsData