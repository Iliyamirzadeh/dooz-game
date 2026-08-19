// این فایل تمام حالت‌های ممکن برای برنده شدن در بازی سه در سه رو تعریف می‌کنه
// هر آرایه داخلی شامل ۳ خانه (با مختصات row و column) هست که اگه هر سه پر و یکسان باشن، یعنی برد
export const WINNING_COMBINATIONS = [
  // برد افقی - ردیف اول
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 },
  ],
  // برد افقی - ردیف دوم
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 },
  ],
  // برد افقی - ردیف سوم
  [
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 },
  ],
  // برد عمودی - ستون اول
  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 },
  ],
  // برد عمودی - ستون دوم
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 },
  ],
  // برد عمودی - ستون سوم
  [
    { row: 0, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 2 },
  ],
  // برد مورب - از بالا چپ به پایین راست
  [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 2 },
  ],
  // برد مورب - از بالا راست به پایین چپ
  [
    { row: 0, column: 2 },
    { row: 1, column: 1 },
    { row: 2, column: 0 },
  ],
];
