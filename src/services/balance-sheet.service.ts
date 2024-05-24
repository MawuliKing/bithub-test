import { AppDataSource } from "../core/data-source";

export class BalanceSheetService {
  async getBalanceSheet() {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    const balanceSheet = await queryRunner.query(
      "CALL generate_balance_sheet()"
    );
    await queryRunner.release();
    return balanceSheet[0];
  }
}
