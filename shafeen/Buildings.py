__author__ = 'smahmud'


class Building(object):
    def __init__(self, player):
        # TODO: make player class
        self.playerOwner = player
        self.faction = player.faction

class Dwelling(Building):
    def __init__(self):
        self.upgradeSet = {[TradingHouse.__name__]}

class TradingHouse(Dwelling):
    def __init__(self):
        self.upgradeSet = {[Temple.__name__, Stronghold.__name__]}

class Stronghold(TradingHouse):
    def __init__(self):
        self.upgradeSet = None

class Temple(TradingHouse):
    def __init__(self):
        self.upgradeSet = {[Sanctuary.__name__]}

class Sanctuary(Temple):
    def __init__(self):
        self.upgradeSet = None
