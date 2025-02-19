export class MediaLibAdapter {

  static get toolbox() {
    return {
      title: 'Media Library',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="72" y="40" width="144" height="144" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="120" cy="88" r="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,184v24a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96.69,184l77.65-77.66a8,8,0,0,1,11.32,0L216,136.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`,
    }
  }

  constructor({api, config}) {
    this.api = api
    this.config = config || {}
  }

  render() {
    const currentIndex = this.api.blocks.getCurrentBlockIndex();

    if (this.config.mediaLibToggleFunc) {
      this.config.mediaLibToggleFunc(currentIndex);
    }

    return document.createElement('p');
  }

  save() {
    return {
      name: "mediaLibraryStrapi"
    }
  }
}
