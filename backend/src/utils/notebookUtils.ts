import {
    MountPath,
    Notebook,
    NotebookPost,
    Volume
  } from '../types';

export const setImage = (notebook: Notebook, body: NotebookPost) => {
    notebook.spec.template.spec.containers[0].image = body.image;
    return notebook
}

export const setImagePullPolicy = (notebook: Notebook, body: NotebookPost) => {
    notebook.spec.template.spec.containers[0].imagePullPolicy = body.imagePullPolicy;
    return notebook
}

export const setServerType = (notebook: Notebook, body: NotebookPost) => {
    return notebook;
}

export const setCPU = (notebook: Notebook, body: NotebookPost) => {
    let cpu_limit = body.cpuLimit;
    // Add checks for invalid input
    let limitFactor = null; // TODO: Add limit factor
    if (!cpu_limit && limitFactor != null) {
        cpu_limit = (1).toString() //Placeholder
    };
    notebook.spec.template.spec.containers[0].resources.requests.cpu = body.cpu;
    if (cpu_limit) {
        notebook.spec.template.spec.containers[0].resources.limits.cpu = body.cpuLimit;
    };
    return notebook
}

export const setMemory = (notebook: Notebook, body: NotebookPost) => {
    // Add checks and limit logic
    notebook.spec.template.spec.containers[0].resources.requests.memory = body.memory;
    if (body.memoryLimit) {
        notebook.spec.template.spec.containers[0].resources.limits.memory = body.memoryLimit;
    };
    return notebook
}

export const setTolerations = (notebook: Notebook, body: NotebookPost) => {
    // Add logic for handling config Groups
    return notebook;
}

export const setAffinity = (notebook: Notebook, body: NotebookPost) => {
    // Add logic for affinity configs
    return notebook;
}

export const setGPU = (notebook: Notebook, body: NotebookPost) => {
    // Add GPU logic
    return notebook;
}

export const addVolume = (notebook: Notebook, volume: Volume, mount: MountPath) => {
    notebook.spec.template.spec.volumes.push(volume);
    notebook.spec.template.spec.containers[0].volumeMounts.push(mount);
    return notebook;
}

export const addOseOauthProxy = (notebook: Notebook) => {
    return notebook;
}