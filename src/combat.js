const canAttack = (player) => ({
  assault:(enemy) => {
    return `${player.name} assulted the enemy`
  }
});

const receiveDamage = (player) => ({
  assault:(player) => {
    return `${player.name} received damage`
  }
});

const Death = (player) => ({
    
});