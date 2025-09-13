#!/bin/bash

filename="c.jsx"

name=$(basename "$filename" | cut -d. -fi)
extension="${filename##*.}"

for i in $(seq 1 18); do
    cp ./"$filename" "C${i}.${extension}"
done