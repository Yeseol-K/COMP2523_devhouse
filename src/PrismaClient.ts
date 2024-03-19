//NOTE - IGNORE THIS FILE FOR NOW
import { PrismaClient } from "@prisma/client";

class DBClient {
  public prisma: PrismaClient;
  private static instance: DBClient;
  private constructor() {
    this.prisma = new PrismaClient();
  }

  // Use singleton to avoid creating unnecessary connections
  public static getInstance = () => {
    if (!DBClient.instance) {
      DBClient.instance = new DBClient();
    }
    return DBClient.instance;
  };
}

export default DBClient;
