class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
      this.name = null;
      this.rank = null;
      this.pendingQuests=0;
      this.score=0;
      this.look=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      pendingQuests:this.pendingQuests,
      score:this.score,
      look:this.look
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
      //console.log(allPlayers);
    })
  }
    getWinner() {
        database.ref('winner').on("value", (data) => {
            this.rank = data.val();
        });
    }

    static updateWinner(rank) {
        database.ref('/').update({
            winner: rank
        });
    }
}
