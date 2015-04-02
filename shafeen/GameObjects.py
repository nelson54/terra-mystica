__author__ = 'smahmud'


#
# mapIDs will be unique to every GridHex
# it will identify its position in the map
#
# see notes.md for reference
class GridHex(object):

    def __init__(self, mapID, terrain):
        self.mapID = mapID
        self.terrain = terrain
        # the properties below will be set by
        # the game board when the game starts
        self.placedBuilding = None
        self.currentBridgedGridHex = None
        self.bridgeableGridHexSet = None
        self.adjacentGridHexSet = None



# Each GridHex will have a Terrain type (can change during game)
class Terrain(object):
    #TODO: add terraform cost map for each terrain type for each player
    #TODO: OR each player can just keep track of their own costs (better)

    terrainSet = (['Plains','Swamp','Lakes','Forest','Mountains','Wasteland','Desert','River'])
    def __init__(self, type):
        if type not in Terrain.terrainSet:
            raise RuntimeError("Terrain does not exist!")
        self.type = type




