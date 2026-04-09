player.onItemInteracted(MUSHROOM_STEW, function () {
    for (let index = 0; index < 100; index++) {
        mobs.spawn(PRIMED_TNT, player.position())
    }
})
player.onChat("/ob give", function () {
    mobs.spawn(MUSHROOM_STEW, player.position())
})
