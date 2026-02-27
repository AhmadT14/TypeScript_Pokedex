export type cacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  private cache: Map<string, cacheEntry<any>> = new Map();
  private reapIntervalId: NodeJS.Timeout | undefined = undefined;
  private interval: number;


    constructor(number: number){
        this.interval = number;
        this.startReapLoop();
    }

  add<T>(key: string, val: T) {
    const entry: cacheEntry<T> = {
      createdAt: Date.now(),
      val,
    };
    this.cache.set(key, entry);
  }
  get<T>(key: string): cacheEntry<T> | undefined {
    const entry = this.cache.get(key);
    if (!entry) return undefined;
    if (Date.now() - entry.createdAt >= this.interval) {
      this.cache.delete(key);
      return undefined;
    }
    return entry as cacheEntry<T>;
  }
  private reap() {      
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.createdAt >= this.interval) {
        this.cache.delete(key);
      }
    }
  }
  private startReapLoop() {
    if (this.reapIntervalId !== undefined) return;
    this.reapIntervalId = setInterval(() => this.reap(), this.interval);
  }
  stopReapLoop(){
    if (this.reapIntervalId === undefined) return;
    clearInterval(this.reapIntervalId);
    this.reapIntervalId = undefined;
  }
}
