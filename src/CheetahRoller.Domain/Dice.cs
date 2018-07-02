using System;

namespace CheetahRoller.Domain
{
    public class Dice
    {
        public Dice(int size)
        {
            Size = size;
        }
        public DiceSize Size { get; }
        public int Face { get; private set; }
        private static readonly Random Roller = new Random();

        public void Roll()
        {
            Face = Roller.Next(Size + 1);
        }
    }
}
