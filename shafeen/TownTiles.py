__author__ = 'smahmud'

from Resources import ResourceBundleBuilder, ResourceBundle
# use this as a MODULE

# Towns have associated bonus resources (ResourceBundle) when created
# see __test__() below


# There are 2 of each Town types
# 1. 5 victory, 6 gold
# 2. 6 victory, 8 power
# 3. 7 victory, 2 worker
# 4. 8 victory, 1 fire/air/water/earth
# 5. 9 victory, 1 priest
class Town(object):
    # each town type starts off with 2 available indicated in this map below:
    townTypeAvailabilityMap = {1:2, 2:2, 3:2, 4:2, 5:2}

    def __init__(self, towntype):
        self.keyUsed = False
        if type(towntype) is not int:
            raise RuntimeError('integer expected for towntype')
        if towntype not in Town.townTypeAvailabilityMap:
            raise RuntimeError('incorrect towntype')
        if not Town.isTownTypeAvailable(towntype):
            raise RuntimeError("Town type is unavailable!")
        self.bonusResourceBundle =  Town.getResourceBundleForTownType(towntype)
        Town.townTypeAvailabilityMap[towntype] -= 1

    def useKey(self):
        self.keyUsed = True

    def keyIsAvailable(self):
        return not self.keyUsed

    @staticmethod
    def isTownTypeAvailable(type):
        if type not in Town.townTypeAvailabilityMap:
            raise RuntimeError('incorrect towntype')
        return Town.townTypeAvailabilityMap[type] > 0

    @staticmethod
    def getResourceBundleForTownType(type):
        if type == 1:
            return ResourceBundleBuilder.initNewBundle().addVictory(5).addGold(6).build()
        elif type == 2:
            return ResourceBundleBuilder.initNewBundle().addVictory(6).addPower(8).build()
        elif type == 3:
            return ResourceBundleBuilder.initNewBundle().addVictory(7).addWorker(2).build()
        elif type == 4:
            return ResourceBundleBuilder.initNewBundle().addVictory(8).addFire(1).addAir(1).addWater(1).addEarth(1).build()
        elif type == 5:
            return ResourceBundleBuilder.initNewBundle().addVictory(9).addPriest(1).build()



def __test__():
    t = Town(1)
    y = Town(1)
    try:
        y = Town(1)
    except RuntimeError, e:
        print e.message

    Town(2)
    print Town.isTownTypeAvailable(1)

    print Town.isTownTypeAvailable(2)
    print Town.isTownTypeAvailable(3)

    Town(4)
    Town(4)
    print Town.isTownTypeAvailable(4)

# __test__()