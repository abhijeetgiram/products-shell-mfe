#!/bin/bash

# List of repositories to sync
REPOS=(
    "https://github.com/abhijeetgiram/products-shell-mfe"
    "https://github.com/abhijeetgiram/products-remote-mfe"
    "https://github.com/abhijeetgiram/orders-remote-mfe"
)

# Emoji for status
CLONE="⬇️"
CLONE_SUCCESS="⬇️✅"
CLONE_FAILURE="⬇️❌"
PULL_SUCCESS="🔃✅"
PULL_FAILURE="🔃❌"
PULL="🔃"
BRANCH="🌿"

# Function to clone or pull a repository
sync_repo() {
    local repo_url=$1
    local repo_name=$(basename "$repo_url" .git)
    # Check if the directory exists
    if [ -d "$repo_name" ]; then
        echo "$PULL Pull latest changes for '$repo_name'"
        cd "$repo_name" || { echo "Failed to enter directory '$repo_name'"; return; }
        if git pull; then
            local current_branch=$(git branch --show-current)
            echo "$BRANCH Current branch of '$repo_name' is '$current_branch'"
            echo "$PULL_SUCCESS Successfully pulled latest changes for '$repo_name'"
            cd "../"
        else
            echo "$PULL_FAILURE Failed to pull latest changes for '$repo_name'"
            cd "../"
        fi
    else
        echo "$CLONE Cloning '$repo_name' repository "
        if git clone "$repo_url" "$repo_name"; then
            echo "$CLONE_SUCCESS Successfully cloned '$repo_name'"
        else
            echo "$CLONE_FAILURE Failed to clone '$repo_name'"
        fi
    fi      
}

# Navigate to the parent directory
cd "../"

# Sync each repository
for repo in "${REPOS[@]}"; do
    sync_repo "$repo"
done