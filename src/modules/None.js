function None(event, result) {
  console.log(this.db);
  event.reply(`意圖：${result.topScoringIntent.intent} 機率： ${result.topScoringIntent.score}`);
}

module.exports = None;
