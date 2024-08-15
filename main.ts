player.onItemInteracted(APPLE, function () {
    blocks.fill(
    SMOOTH_SANDSTONE,
    pos(0, 0, 2),
    pos(0, 3, 2),
    FillOperation.Replace
    )
    blocks.place(JACK_O_LANTERN, pos(0, 4, 2))
})
player.onChat("поле", function () {
    blocks.fill(
    SEA_LANTERN,
    pos(-16, -1, -24),
    pos(16, -1, 24),
    FillOperation.Outline
    )
    blocks.fill(
    GRASS,
    pos(-15, -1, -23),
    pos(15, -1, -1),
    FillOperation.Outline
    )
    blocks.fill(
    GRASS,
    pos(-15, -1, 1),
    pos(15, -1, 23),
    FillOperation.Outline
    )
    shapes.circle(
    SEA_LANTERN,
    pos(0, -1, 0),
    5,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    SEA_LANTERN,
    pos(0, -1, -19),
    5,
    Axis.Y,
    ShapeOperation.Outline
    )
    shapes.circle(
    SEA_LANTERN,
    pos(0, -1, 19),
    5,
    Axis.Y,
    ShapeOperation.Outline
    )
    blocks.fill(
    SEA_LANTERN,
    pos(-8, -1, -24),
    pos(8, -1, -17),
    FillOperation.Replace
    )
    blocks.fill(
    SEA_LANTERN,
    pos(-8, -1, 24),
    pos(8, -1, 17),
    FillOperation.Replace
    )
    blocks.fill(
    GRASS,
    pos(-7, -1, -23),
    pos(7, -1, -18),
    FillOperation.Replace
    )
    blocks.fill(
    GRASS,
    pos(-7, -1, 23),
    pos(7, -1, 18),
    FillOperation.Replace
    )
    blocks.fill(
    SEA_LANTERN,
    pos(-4, -1, -24),
    pos(4, -1, -21),
    FillOperation.Replace
    )
    blocks.fill(
    SEA_LANTERN,
    pos(-4, -1, 24),
    pos(4, -1, 21),
    FillOperation.Replace
    )
    blocks.fill(
    GRASS,
    pos(-3, -1, -23),
    pos(3, -1, -22),
    FillOperation.Replace
    )
    blocks.fill(
    GRASS,
    pos(-3, -1, 23),
    pos(3, -1, 22),
    FillOperation.Replace
    )
})
player.onChat("run", function () {
	
})
