# Docker Scripts for IELTS Course Project

## Development Commands

### Start development environment
```bash
docker-compose -f docker-compose.dev.yml up --build
```

### Stop development environment
```bash
docker-compose -f docker-compose.dev.yml down
```

## Production Commands

### Build and start production environment
```bash
docker-compose up --build -d
```

### Start with nginx reverse proxy
```bash
docker-compose --profile production up --build -d
```

### Stop production environment
```bash
docker-compose down
```

## Utility Commands

### Build production image only
```bash
docker build -t ielts-course .
```

### Run production container directly
```bash
docker run -p 3000:3000 ielts-course
```

### View logs
```bash
docker-compose logs -f ielts-course
```

### Clean up Docker resources
```bash
docker system prune -a
```

### Remove all containers and images for this project
```bash
docker-compose down --rmi all --volumes --remove-orphans
```
