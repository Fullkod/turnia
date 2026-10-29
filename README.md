# Turnia - Sistema de Gestión de Turnos Médicos

Turnia es una aplicación multiplataforma para la gestión de turnos y horarios en entornos de salud, desarrollada con Next.js, React Native (Capacitor) y Supabase.

## Características Principales

- 🏥 Gestión de turnos médicos
- 👥 Sistema de roles (Admin, Manager, Staff, Viewer)
- 📅 Calendario de turnos interactivo
- 📱 Aplicaciones nativas para iOS y Android
- 🌐 Versión web responsive
- 🔔 Sistema de notificaciones
- 📊 Exportación de horarios

## Tecnologías

- **Frontend**: Next.js 16 + React 19 + TypeScript
- **Mobile**: Capacitor 8 (iOS y Android)
- **Backend**: Supabase (PostgreSQL + Edge Functions)
- **UI**: Tailwind CSS 4
- **Calendario**: FullCalendar

## Estructura del Proyecto

```
turnia/
├── src/                    # Código fuente de la aplicación web
│   ├── app/               # App router de Next.js
│   ├── components/        # Componentes React
│   ├── lib/              # Utilidades y configuración
│   └── types/            # Definiciones de TypeScript
├── ios/                   # Proyecto nativo iOS
├── android/               # Proyecto nativo Android
├── supabase/             # Backend y base de datos
│   ├── migrations/       # Migraciones SQL
│   └── functions/        # Edge Functions
├── docs/                 # Documentación del proyecto
└── resources/            # Assets fuente para apps nativas
```

## Inicio Rápido

### Prerrequisitos

- Node.js 20+
- npm o yarn
- Supabase CLI (para desarrollo local)
- Xcode (para iOS)
- Android Studio (para Android)

### Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Edita .env con tus credenciales de Supabase

# Iniciar Supabase local
supabase start

# Ejecutar migraciones
npm run db:push

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000)

## Desarrollo con Apps Nativas

### Sincronizar con plataformas nativas

```bash
# Construir y sincronizar con iOS y Android
npm run cap:sync

# Abrir en Xcode (iOS)
npm run cap:ios

# Abrir en Android Studio
npm run cap:android
```

### Generar Assets Nativos

Los íconos y splash screens se generan automáticamente desde el logo:

```bash
# Regenerar todos los assets (iOS, Android, PWA)
npx @capacitor/assets generate --iconBackgroundColor '#17a2b8' --iconBackgroundColorDark '#0d7a8a' --splashBackgroundColor '#ffffff' --splashBackgroundColorDark '#000000'
```

Ver [docs/native-assets.md](./docs/native-assets.md) para más detalles.

## Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run start        # Iniciar servidor de producción
npm run lint         # Ejecutar linter

# Capacitor
npm run cap:sync     # Sincronizar con plataformas nativas
npm run cap:ios      # Abrir proyecto iOS
npm run cap:android  # Abrir proyecto Android

# Supabase
npm run supabase:gen # Generar tipos TypeScript
npm run db:push      # Aplicar migraciones
npm run db:reset     # Resetear base de datos
```

## Sistema de Roles

La aplicación implementa un sistema RBAC (Role-Based Access Control) con 4 niveles:

1. **Admin**: Acceso completo al sistema
2. **Manager**: Gestión de personal y horarios
3. **Staff**: Gestión de turnos propios y solicitudes
4. **Viewer**: Solo lectura de información

Ver [docs/first-admin.md](./docs/first-admin.md) para configurar el primer administrador.

## Documentación

- [Roadmap del Proyecto](./docs/project-roadmap.md)
- [Configuración de Colores](./docs/colors.md)
- [Assets Nativos](./docs/native-assets.md)
- [Comandos de Setup](./docs/setup-commands.md)
- [Primer Administrador](./docs/first-admin.md)

## Despliegue

### Web (Vercel)

```bash
# Conectar con Vercel
vercel

# Desplegar
vercel --prod
```

### iOS (App Store)

1. Abrir el proyecto en Xcode
2. Configurar certificados y perfiles
3. Archivar y subir a App Store Connect

### Android (Google Play)

1. Abrir el proyecto en Android Studio
2. Generar APK/Bundle firmado
3. Subir a Google Play Console

## Contribución

Este es un proyecto en desarrollo activo. Para contribuir:

1. Fork el repositorio
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## Licencia

Software propietario. Todos los derechos reservados por Fullkod — ver [LICENSE](LICENSE).

## Soporte

Para soporte y consultas, contactar al equipo de desarrollo.
