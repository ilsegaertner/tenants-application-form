# Tenants Application Form

This project is a multi-step application form for tenants to register with a company and start booking apartments. It includes fields for full name, email, phone number, and salary indication. The form also includes a progress indicator and a summary of all the data entered during the flow, displayed on the last page.

## Features

- Multi-step form with progress indicator
- Form validation using zod and react-hook-form
- Modal confirmation before submission
- Toast notifications using sonner
- Styled using Tailwind CSS and shadcn/ui

## View the Application

You can view the application live at: <a href="https://tenants-form.netlify.app" target="_blank">https://tenants-form.netlify.app</a>

## Run Locally with Docker

If you prefer to run the application locally, follow these steps:

### Install Docker

Download and install Docker from [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop).

### Build the Docker Image

Open a terminal, navigate to the project directory, and run:

###### docker build -t tenants-application-form

### Run the Docker Container

Run the following command to start the application:

###### docker run -p 3000:80 tenants-application-form

### Open in Browser

Open your web browser and go to http://localhost:3000 to view the application.

Feel free to customize the content and the URL as per your needs.
