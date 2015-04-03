__author__ = 'smahmud'

# object to concisely represent resources of any type
# OR it can also represent a "bundle" of resources
# can contain information about the following items:
# - priest income
# - gold amount
# - worker amount
# - power amount
# - fire cult advance amount
# - air cult advance amount
# - earth cult advance amount
# - water cult advance amount
#
# Note that any of the items above can be 0
# Example -  gold Resource Bundle
# r = ResourceBundleBuilder.initNewBundle().setGold(1).build()
#
# see __test__() below for some more sample usage


# user should not try to modify this object after
# it has been returned from ResourceBundleBuilder
class ResourceBundle(object):
    def __init__(self):
        # traditional resources
        self.gold, self.worker, self.priest, self.power = 0, 0, 0, 0
        # cult track amounts
        self.fire, self.air,  self.water, self.earth = 0, 0, 0, 0
        # victory points
        self.victorypoints = 0

    # TODO: fix this!!
    def __add__(self, otherBundle):
        if otherBundle is not ResourceBundle:
            raise RuntimeError("Error, must be of the same type!")
        newResourceBundle = ResourceBundle()
        newResourceBundle.gold   = self.gold   + otherBundle.gold
        newResourceBundle.worker = self.worker + otherBundle.worker
        newResourceBundle.priest = self.priest + otherBundle.priest
        newResourceBundle.power  = self.power  + otherBundle.power
        newResourceBundle.fire   = self.fire   + otherBundle.fire
        newResourceBundle.air    = self.air    + otherBundle.air
        newResourceBundle.water  = self.water  + otherBundle.water
        newResourceBundle.earth  = self.earth  + otherBundle.earth
        newResourceBundle.victorypoints  = self.victorypoints  + otherBundle.victorypoints
        return newResourceBundle

    def __str__(self):
        RBString = '%s %s %s %s -' % (self.gold, self.worker, self.priest, self.power)
        RBString += ' %s %s %s %s -' % (self.fire, self.air, self.water, self.earth)
        RBString += ' %s' % self.victorypoints
        return RBString


class ResourceBundleBuilder(object):
    # traditional resources
    gold, worker, priest, power = 0, 0, 0, 0
    # cult track amounts
    fire, air, water, earth = 0, 0, 0, 0
    # victory points
    victorypoints = 0

    @staticmethod
    def _reset():
        RBB = ResourceBundleBuilder # alias
        RBB.gold, RBB.worker, RBB.priest, RBB.power = 0, 0, 0, 0
        RBB.fire, RBB.air, RBB.water, RBB.earth = 0, 0, 0, 0
        RBB.victorypoints = 0
    @staticmethod
    def initNewBundle():
        ResourceBundleBuilder._reset()
        return ResourceBundleBuilder

    # Resource setters
    @staticmethod
    def addGold(amt):
        if type(amt) is not int: 
            raise RuntimeError('int expected!') 
        ResourceBundleBuilder.gold=amt
        return ResourceBundleBuilder
    @staticmethod
    def addWorker(amt):
        if type(amt) is not int: 
            raise RuntimeError('int expected!') 
        ResourceBundleBuilder.worker=amt
        return ResourceBundleBuilder
    @staticmethod
    def addPriest(amt):
        if type(amt) is not int: 
            raise RuntimeError('int expected!') 
        ResourceBundleBuilder.priest=amt
        return ResourceBundleBuilder
    @staticmethod
    def addPower(amt):
        if type(amt) is not int: 
            raise RuntimeError('int expected!') 
        ResourceBundleBuilder.power=amt
        return ResourceBundleBuilder

    @staticmethod
    def addFire(amt):
        if type(amt) is not int: 
            raise RuntimeError('int expected!') 
        ResourceBundleBuilder.fire=amt
        return ResourceBundleBuilder
    @staticmethod
    def addAir(amt):
        if type(amt) is not int: 
            raise RuntimeError('int expected!') 
        ResourceBundleBuilder.air=amt
        return ResourceBundleBuilder
    @staticmethod
    def addWater(amt):
        if type(amt) is not int: 
            raise RuntimeError('int expected!') 
        ResourceBundleBuilder.water=amt
        return ResourceBundleBuilder
    @staticmethod
    def addEarth(amt):
        if type(amt) is not int: 
            raise RuntimeError('int expected!') 
        ResourceBundleBuilder.earth=amt
        return ResourceBundleBuilder

    @staticmethod
    def addVictory(amt):
        if type(amt) is not int:
            raise RuntimeError('int expected!')
        ResourceBundleBuilder.victorypoints=amt
        return ResourceBundleBuilder

    @staticmethod
    def build():
        RBB = ResourceBundleBuilder # alias
        rb = ResourceBundle()
        rb.gold, rb.worker, rb.priest, rb.power = RBB.gold, RBB.worker, RBB.priest, RBB.power
        rb.fire, rb.air, rb.water, rb.earth = RBB.fire, RBB.air, RBB.water, RBB.earth
        rb.victorypoints = RBB.victorypoints
        RBB._reset()
        return rb

    @staticmethod
    def toString():
        RBB = ResourceBundleBuilder # alias
        RBBString = '%s %s %s %s -' % (RBB.gold, RBB.worker, RBB.priest, RBB.power)
        RBBString += ' %s %s %s %s -' % (RBB.fire, RBB.air, RBB.water, RBB.earth)
        RBBString += ' %s' % RBB.victorypoints
        return RBBString



def __test__():
    r = ResourceBundleBuilder.initNewBundle().addPriest(1).addVictory(10).build()
    s = ResourceBundleBuilder.initNewBundle().addPriest(1).addVictory(20).build()
    print s
    print r

# __test__()
