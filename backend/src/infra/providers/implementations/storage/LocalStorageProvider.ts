import fs from "fs";
import { resolve } from "path";

import { IStorageProvider } from "@infra/providers/IStorageProvider";
import { config } from "@config/upload";


class LocalStorageProvider implements IStorageProvider {
  async save(file: string, folder: string): Promise<string> {
    await fs.promises.rename(
      resolve(config.dest, file),
      resolve(`${config.dest}/${folder}`, file)
    );

    return `${folder}/${file}`;
  }
  async delete(file: string, folder: string): Promise<void> {
    const filename = resolve(`${config.dest}/${folder}`, file);

    try {
      await fs.promises.stat(filename);
    } catch {
      return;
    }
    await fs.promises.unlink(filename);
  }
}

export { LocalStorageProvider };
