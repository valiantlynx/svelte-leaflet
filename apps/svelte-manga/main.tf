terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0.1"
    }
  }
}

provider "docker" {}

resource "docker_image" "svelte_manga" {
  name         = "valiantlynx/svelte-manga" # Adjust this to match your image name
  keep_locally = true
}

resource "docker_container" "svelte_manga" {
  image = docker_image.svelte_manga.image_id
  name  = "svelte-manga"

  ports {
    internal = 3000
    external = 3000 # You might want to change this depending on your setup
  }
}

resource "docker_image" "nginx" {
  name         = "nginx"
  keep_locally = false
}

resource "docker_container" "nginx" {
  image = docker_image.nginx.image_id
  name  = "nginx-proxy"

  ports {
    internal = 80
    external = 80 # Expose nginx on port 80
  }
}
