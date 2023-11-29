import fs from "fs-extra";
import { Mutex } from "async-mutex";
import { Comparable } from "./Types";
export default class File {
  private static filename = "./src/classes/dados.txt";
  private static writeMutex = new Mutex();
  static async append(items: Comparable[]): Promise<void> | never {
    const release = await this.writeMutex.acquire();
    try {
      const texto = await fs.readFile(this.filename, "utf8");
      let lines: string[] = items.map((item) => item.toString() + "\r\n");
      await fs.writeFile(this.filename, texto + lines.join(""), "utf8");
    } catch (e: any) {
      throw new Error(e.message);
    } finally {
      release();
    }
  }
}
