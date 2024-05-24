DELIMITER $$

CREATE PROCEDURE generate_balance_sheet()
BEGIN
    SELECT
        a.name AS account_name,
        SUM(CASE WHEN t.debitAccountId = a.id THEN t.amount ELSE 0 END) AS debit,
        SUM(CASE WHEN t.creditAccountId = a.id THEN t.amount ELSE 0 END) AS credit
    FROM
        gl_account a
    LEFT JOIN
        `Transaction` t
    ON
        a.id = t.debitAccountId OR a.id = t.creditAccountId
    GROUP BY
        a.name;
END $$

DELIMITER ;
