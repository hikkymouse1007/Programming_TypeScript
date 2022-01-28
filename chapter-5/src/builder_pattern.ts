class RequestBuilder {
  private url: string | null = null
  private data: Object | null = null
  private method: 'get' | 'post' | null = null

  setUrl(url: string): this {
    this.url = url
    return this
  }
  setDate(data: Object): this {
    this.data = data
    return this
  }
  setMethod(method: 'get' | 'post'): this {
    this.method = method
    return this
  }
  send() {
    // something
  }
}

new RequestBuilder()
  .setUrl('/user')
  .setMethod('get')
  .setDate({firstName: 'Anna'})
  .send()
