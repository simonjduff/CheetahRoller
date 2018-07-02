using CheetahRoller.Domain;
using CheetahTesting;
using System.Linq;
using unit;
using Xunit;

namespace Unit.Steps
{
    public static class RollSpecSteps
    {
        public static void RollSpecInput<T>(this IGiven<T> given, string spec)
        where T : class, IHasRollSpecInput
        {
            given.Context.RollSpecInput = spec;
        }

        public static void BuildRollSpec<T>(this IWhen<T> when)
            where T : class, IHasRollSpec, IHasRollSpecInput
        {
            when.Context.RollSpec = new RollSpec(when.Context.RollSpecInput);
        }

        public static void SpecHasXDiceAtSizeY<T>(this IThen<T> then, int count, int size)
        where T : IHasRollSpec
        {
            var dice = then.Context.RollSpec.Dice.Where(d => d.Size == size);
            Assert.Equal(count, dice.Count());
        }
    }
}