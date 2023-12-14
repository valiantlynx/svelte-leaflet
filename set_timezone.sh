#!/bin/bash

# Set timezone selections for debconf
echo "tzdata tzdata/Areas select Europe" > timezone.conf
echo "tzdata tzdata/Zones/Europe select Oslo" >> timezone.conf
sudo debconf-set-selections < timezone.conf

# Update timezone information
sudo dpkg-reconfigure -f noninteractive tzdata
